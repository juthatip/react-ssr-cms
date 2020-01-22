import controller from './controller';

export function setup(router) {
  router.get('/all', controller.allCategory);
}
