// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

const allContactsList = document.querySelector("#display_all_contacts")
const displaySingleContact = document.querySelector("#display_single_contact")

function loadContacts(contacts) {
  toggleAllContacts(true)
  for (contact of contacts) {
    const html = `
    <div class="contact" data-index=${contact.ID}><img src="img/${contact.image}" alt="Image of ${contact.image}"><p>${contact.name}</p>
    </div>
    `
    allContactsList.insertAdjacentHTML("afterbegin", html)
  }
}

function toggleAllContacts(showall) {
  const toShow = showall ? allContactsList : displaySingleContact
  const toHide = showall ? displaySingleContact : allContactsList

  toShow.removeAttribute("style")
  toHide.setAttribute("style", "display: none;")

  if (showall) {
    document.querySelector("#individual_contact")?.remove()
  }
}
loadContacts(contactsList)
