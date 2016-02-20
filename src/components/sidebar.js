import {ul, li, a} from '@cycle/dom';

function Sidebar(sources, path$) {
  const {router: {createHref}} = sources;

  const counterHref = createHref('/counter');
  const homeHref = createHref('/');
  console.log(counterHref);

  const view$ = path$.map(() => {
    return ul([
      li([a({href: counterHref, title: 'derpyderp'}, 'Counfffter')]),
      li([a({href: homeHref}, 'Home')])
    ]);
  });

  return {DOM: view$};
}

export default Sidebar;
