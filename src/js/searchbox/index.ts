import { colors } from "./data/colors";

const searchBoxWrapper: HTMLElement = document.querySelector('#search-box-wrapper');
const searchBoxInput: HTMLInputElement = document.querySelector('#search-box-input');
const chosenColorBox: HTMLInputElement = document.querySelector('.chosen-color');

const clearButton: HTMLButtonElement = document.querySelector('#clear-input-color');
const searchButton: HTMLButtonElement = document.querySelector('#search-input-color');

const buttonsWrapper: HTMLButtonElement = document.querySelector('.buttons-wrapper');

const colorsWrapper: HTMLUListElement = document.createElement('ul')

const chosenColors: string[] = [];

searchBoxInput.addEventListener("input",  (e: Event) => {
    let inputValue: string = (e.target as HTMLTextAreaElement).value;
    chosenColors.push(inputValue);

    colors.forEach(({id, category}) => {
        const matchItems: RegExpMatchArray = category.match(inputValue);
        if (matchItems !== null) {
            document.title = matchItems.input;
            setColors(id);
        }
    });

    searchBoxInput.value == '' && cleanInput();
});

buttonsWrapper.addEventListener('click', (e) => {
    e.preventDefault()
    e.target === clearButton && cleanInput();
    if (e.target === searchButton) {
        document.title = 'green';
        const greenOnGreen = colors.filter(colors => colors.category === 'green')
        chosenColorBox.innerHTML = greenOnGreen[0].id
        setColors(document.title);
    }
});

const setColors = (color: string) => {
    searchBoxInput.style.color = color;
    chosenColorBox.style.backgroundColor = color;
    chosenColorBox.innerHTML = color;
    const foundBlack = colors.filter(color => color.category === 'black');
    if (foundBlack[0].id === color) {
        chosenColorBox.style.color = '#fff';
    } else {
        chosenColorBox.style.color = foundBlack[0].id;
    }
}

const cleanInput = () => {
    searchBoxInput.value = ''
    chosenColorBox.innerHTML = 'Color';
    chosenColorBox.style.backgroundColor = '#fff';
}

const renderColors = () => {
    colors.forEach(({id}) => {
        const colorElement = document.createElement('li');

        colorElement.innerHTML = id;
        colorElement.style.backgroundColor = `${id}`
        id === '#000' && (colorElement.style.color = '#fff');
        colorsWrapper.appendChild(colorElement);
    });

    searchBoxWrapper.appendChild(colorsWrapper)
}

renderColors();