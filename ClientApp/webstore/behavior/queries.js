import { childrenGenerator } from './helpers';


const navItemFragment = `fragment navItem on NavigationItem {
  id
  title
  link {
    target
    to {
      routeName
    }
    url
  }
  visible
}`;

export const getFullNavigation = (depth) => {
  return `query GetFullNavigation($group: NavigationGroupCode!) {
    navigation {
      items (groupCode: $group) {
        ...navItem
        ${childrenGenerator(depth)}
      }
    }
  }` + navItemFragment
};