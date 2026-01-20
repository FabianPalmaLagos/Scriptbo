import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet, EditorView } from '@tiptap/pm/view';
import { Node as ProsemirrorNode } from '@tiptap/pm/model';

export const VirtualPagination = Extension.create({
    name: 'virtualPagination',

    addProseMirrorPlugins() {
        const paginationKey = new PluginKey('paginationPlugin');

        return [
            new Plugin({
                key: paginationKey,
                state: {
                    init() {
                        return DecorationSet.empty;
                    },
                    apply(tr, set) {
                        const decos = tr.getMeta(paginationKey);
                        if (decos) return decos;
                        return set.map(tr.mapping, tr.doc);
                    },
                },
                props: {
                    decorations(state) {
                        return paginationKey.getState(state);
                    },
                },
                view(editorView) {
                    const calculatePagination = (view: EditorView) => {
                        const PAGE_HEIGHT = 1123;
                        const GAP_HEIGHT = 50; // Visual gap 50px
                        const PAGE_BLOCK_TOTAL = PAGE_HEIGHT + GAP_HEIGHT; // 1173px
                        const CONTENT_HEIGHT = 960; // Trigger breaking early

                        const decorations: Decoration[] = [];

                        let currentPage = 1;
                        const rootRect = view.dom.getBoundingClientRect();

                        view.state.doc.forEach((node: ProsemirrorNode, pos: number) => {
                            try {
                                const coords = view.coordsAtPos(pos);
                                const relativeTop = coords.top - rootRect.top;

                                // Current page visual bounds
                                const currentPageStart = (currentPage - 1) * PAGE_BLOCK_TOTAL;
                                // The cut-off line for text on this page
                                const textLimit = currentPageStart + CONTENT_HEIGHT;

                                if (relativeTop > textLimit) {
                                    // We need to jump to the start of the NEXT page block
                                    // Next page starts at: currentPage * PAGE_BLOCK_TOTAL
                                    // PLUS: We need a Top Margin (Header) on the new page so text doesn't start at the edge.
                                    const PAGE_TOP_MARGIN = 100; // Match CSS padding-top if possible or visual preference
                                    const nextPageContentStart = (currentPage * PAGE_BLOCK_TOTAL) + PAGE_TOP_MARGIN;

                                    // Height needs to fill from here to there
                                    let spacerHeight = nextPageContentStart - relativeTop;

                                    // Safety
                                    if (spacerHeight < GAP_HEIGHT) spacerHeight = GAP_HEIGHT;

                                    const widget = document.createElement('div');
                                    widget.className = 'page-gap-widget';
                                    widget.style.height = `${spacerHeight}px`;

                                    decorations.push(Decoration.widget(pos, widget));
                                    currentPage++;
                                }
                            } catch (e) {
                                // Pos might not be rendered yet
                            }
                        });

                        const newSet = DecorationSet.create(view.state.doc, decorations);

                        setTimeout(() => {
                            if (view.isDestroyed) return;
                            const tr = view.state.tr.setMeta(paginationKey, newSet);
                            tr.setMeta('addToHistory', false);
                            view.dispatch(tr);
                        }, 0);
                    };

                    // Initial calculation
                    calculatePagination(editorView);

                    return {
                        update(view, prevState) {
                            if (!view.state.doc.eq(prevState.doc)) {
                                calculatePagination(view);
                            }
                        },
                    };
                },
            }),
        ];
    },
});
