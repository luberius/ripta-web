export const isCanGoBack = (path: string | undefined | null): boolean => {
	const allowedRoutes = ['/(app)/note/new', '/(app)/note/[id]'];
	return !!path && allowedRoutes.includes(path);
};
