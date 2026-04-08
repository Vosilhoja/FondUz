export const PAGE_SIZE = 9;

export function getPaginatedItems<T>(items: T[], page: number, pageSize: number) {
  const currentPage = Math.max(1, page);
  const totalPages = Math.ceil(items.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);
  
  return {
    items: pageItems,
    totalPages,
    currentPage,
  };
}
