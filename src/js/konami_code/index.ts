import {dataInterface} from "./data/data";

const ESC = 27;
const input: HTMLInputElement = document.querySelector('#konami_input');
const wrapper: HTMLElement = document.querySelector('#konami_code');
const list: HTMLUListElement = document.createElement('ul');

let timeoutIdInout: ReturnType<typeof setTimeout>;
let timeoutIdList: ReturnType<typeof setTimeout>;

// Display 5 newest issues names and nickname of the author
const fetchData = (items: number = 5) => {
    const data = `https://api.github.com/repos/elixir-lang/elixir/issues?&per_page=${items}`;

    fetch(data)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(({title: issueName, user: { login: authorNickname }} : dataInterface) => {
                renderList(issueName, authorNickname)
            })
        })
        .catch(err => console.log('Request Failed', err));
}


input.addEventListener('input', (e) => {
    let inputValue: string = (e.target as HTMLTextAreaElement).value;

    if (timeoutIdInout !== undefined || inputValue === '') {
        clearTimeout(timeoutIdInout);
    }

    timeoutIdInout = setTimeout(clearInput, 5000);

    if (inputValue === 'injects3crets') {
        fetchData();
        if (timeoutIdList  !== undefined) {
            clearTimeout(timeoutIdList);
            console.log(timeoutIdList);
        }
        timeoutIdList = setTimeout(hideList, 15000);
    } else {
        hideList();
    }
});

input.addEventListener("keydown", (e) => {
    if (e.keyCode === ESC) {
        clearInput();
        hideList();
    }
});

const renderList = (issueName: string, authorNickname: string) => {
    const listElement: HTMLLIElement = document.createElement('li');

    listElement.innerHTML = `
    <li>
        <span><strong>Issue name:</strong> ${issueName}</span>
        <span><strong>Author nickname:</strong> ${authorNickname}</span>
    </li>
    `;

    list.appendChild(listElement)
    wrapper.appendChild(list)
}

const hideList = () => {
    list.innerHTML = '';
    list.remove();
}

const clearInput = () => {
    input.value = "";
}



//
// let pending: object = {};
//
// function mySetTimeout(callback: () => void, delay: number) {
//     let t: ReturnType<typeof setTimeout>;
//     t = setTimeout(function() {
//         // @ts-ignore
//         delete pending[t];
//         callback()}, delay)
//     // @ts-ignore
//     pending[t]=1;
//     console.log(t);
// }
// function clearAllTimeouts() {
//     for (var t in pending) if (pending.hasOwnProperty(t)) {
//         clearTimeout(t);
//         // @ts-ignore
//         delete pending[t];
//     }
// }

// mySetTimeout(clearInput, 15000);
