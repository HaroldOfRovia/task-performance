const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
const items = [];
let itemOffsets = [];

function addContacts() {
  const fragment = document.createDocumentFragment();
  const origin = document.createElement("div");
  origin.className = "contact";
  for (let i = 0; i < 50000; i++) {
    const child = origin.cloneNode();
    child.textContent = i;
    fragment.appendChild(child);
    items[i] = child;
  }
  contacts.appendChild(fragment);
  itemOffsets = items.map((item) => item.offsetTop);
}

contacts.addEventListener("scroll", () => {
  const topItemIndex = itemOffsets.findIndex(
    (offset) => contacts.scrollTop - offset <= -18
  );
  if (topItemIndex !== -1){
    stickyHeader.textContent = items[topItemIndex].textContent;
  }
});

addContacts();