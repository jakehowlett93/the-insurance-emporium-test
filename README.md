Task 1 Nav Menu Component (Desktop):

1) I have chosen this component because it's not very accessible and the styling could be improved:
 - There is no way to access the submenus via keyboard.
 - There is no outline / highlighting showing which item is currently in focus when navigating using the tab key.
 - It's not obvious to users that some of the menu items have submenus.
 - The submenu div expands to the same size regardless of submenu content so it takes up a lot more space that it needs to.
 - Some submenu items are not title case

 2) I will improve it by:
  - Using the semantic nav html element to provide keyboard navigation using the tab key and to provide an outline showing what element is currently focused.
  - Using JS to add event listeners to the menu items so that they can be expanded using the enter key when focused.
  - Moving the link present on the Existing Customers and Info Centre menu items into the submenu to improve keyboard navigation.
  - Adding a small arrow icon next to menu items that expand into a submenu.
  - Changing the submenus to only take up the space needed for their content when expanded.
  - add a small animation when the menu is expanded 
