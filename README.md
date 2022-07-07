Note: I'm currently on holiday and couldn't spare the full 3.75 hours so there are still some kinks to work out, I have mentioned these in the improvements section.

Task 1 Nav Menu Component (Desktop):

1) I have chosen this component because it's not very accessible and the styling could be improved:
 - There is no way to access the submenus via keyboard.
 - There is no outline / highlighting showing which item is currently in focus when navigating using the tab key.
 - It's not obvious to users that some of the menu items have submenus.
 - The submenu div expands to the same size regardless of submenu content so it takes up a lot more space that it needs to.
 - Some submenu items are not title case.

 2) I will improve it by:
  - Using the semantic nav html element to provide keyboard navigation using the tab key and to provide an outline showing what element is currently focused.
  - Using JS to add event listeners to the menu items so that they can be expanded using the enter key when focused.
  - Moving the link present on the Existing Customers and Info Centre menu items into the submenu to improve keyboard navigation.
  - Adding a small arrow icon next to menu items that expand into a submenu.
  - Changing the submenus to only take up the space needed for their content when expanded.
  - Adding a small animation when a submenu is expanded.

3) Further improvements to my component given more time:
  - Solve a bug with the click event listener where the active class is not removed if another element is focused by hover or tabbing to a new submenu without closing the current expanded menu. I ran out of time to solve this one but I think i just need to check if any elements have the active class and remove it before applying it to a new element.
  - Fix some of the contrast issues between the blue and white that Lighthouse suggested.
  - Make tab selecting a submenu item change its color and background in the same way that hovering does.
  - Implement the submenus and images that appear when hovering over some submenu items, I ran out of time for this bit but I would reduce the size of the images under the our products menu as these make the submenu height too big.
  - I only focused on the desktop version of the menu due to the time limit.
  - I would add an animation for when a menu collapses.

Improvements to other areas of the site:
 - The low contrast between the background and forms on pages containing forms, such as the auto renewal opt out page, is a bit hard on the eyes in my opinion so I would increase it or adjust the colors.