const btnOpen = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const btnClose = document.querySelector("[data-close]");
const btnSubmit = document.querySelector("[data-submit]");
const btnDelete = document.querySelector("[data-delete]");
const list = document.querySelector("[data-list]");

let data = [{ id: 1, name: "Jorge", number: 1, position: "Goleiro" }];
const showList = () => {
  list.innerHTML = "";
  data.forEach((jogador) => {
    list.innerHTML += `
        <div class="item-list">
            <div
                class="icon-ball"
                >${jogador.number}</div
            >
            <p class="labels">
                <strong>${jogador.name}</strong>
                ${jogador.position}
            </p>
            <div class="delete">
                <button data-delete onclick="onDelete(${jogador.id})">Excluir</button>
            </div>
        </div>
  `;
  });
};
showList();

const submit = () => {
  const name = document.querySelector("[data-input-name]").value;
  const number = document.querySelector("[data-input-number]").value;
  const position = document.querySelector("[data-input-position]").value;
  const id = Math.floor(Math.random() * 99999).toString(36);

  if (!name || !number || !position) return alert("Preencha todos os dados");
  data.push({ id, name, number, position });

  modal.close();
  const inputList = document.querySelectorAll("input");
  for (let input of inputList) {
    input.value = "";
  }
  showList();
};

const onDelete = (id) => {
  data = data.filter((item) => item.id != id);
  showList();
};

btnOpen.addEventListener("click", () => modal.showModal());
btnClose.addEventListener("click", () => modal.close());
btnSubmit.addEventListener("click", submit);
