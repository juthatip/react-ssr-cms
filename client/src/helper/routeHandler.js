import { useRouter } from 'next/router';

const getRoutes = routerProp => {
  const router = routerProp || useRouter();
  const [page] = router.asPath.split('/');
  return {
    page,
    asPath: router.asPath,
    route: router.route
  };
};

export default getRoutes;
