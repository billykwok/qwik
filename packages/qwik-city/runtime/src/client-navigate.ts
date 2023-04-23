export const dispatchPrefetchEvent = (...links: string[]) =>
  document.dispatchEvent(new CustomEvent('qprefetch', { detail: { links } }));

export const clientHistory = {
  id: () => '' + clientHistoryState.id,
  onPopState: () => (clientHistoryState.id = history.state?.id ?? 0),
  pushState: (url: string) => history.pushState({ id: ++clientHistoryState.id }, '', url),
};

const clientHistoryState = { id: 0 };
