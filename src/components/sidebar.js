import {ul, li, a} from '@cycle/dom';

const ulStyle = {
  margin: '0',
  padding: '0',
  listStyle: 'none'
};

const liStyle = {
  margin: '0',
  marginTop: '0.5em',
  padding: '0',
  height: '2em',
  textAlign: 'center',
  borderBottom: '1px solid rgba(34, 34, 34, 0.3)'
};

const linkStyle = {
  height: '100%',
  width: '100%',
  display: 'block',
  textDecoration: 'none'
};

function Sidebar(sources, path$) {
  const {router: {createHref}} = sources;

  const inboxHref = createHref('/counter');
  const composeHref = createHref('/');

  const view$ = path$.map(() => {
    return ul({style: ulStyle},[
      li({style: liStyle}, [
        a({style: linkStyle, props: {href: inboxHref}}, 'Counter')
      ]),
      li({style: liStyle}, [
        a({style: linkStyle, props: {href: composeHref}}, 'Home')
      ])
    ]);
  });

  return {DOM: view$};
}

export default Sidebar;
