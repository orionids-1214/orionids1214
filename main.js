class RecipeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const thumbnail = this.getAttribute('thumbnail');
        const ingredients = JSON.parse(this.getAttribute('ingredients'));
        const instructions = JSON.parse(this.getAttribute('instructions'));

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: 'Noto Sans KR', sans-serif;
                }
                h2 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: var(--primary-color, #ff6f61);
                    margin-bottom: 1rem;
                }
                img {
                    width: 100%;
                    max-width: 400px;
                    height: auto;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                h3 {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: var(--secondary-color, #4a4a4a);
                    border-left: 4px solid var(--primary-color, #ff6f61);
                    padding-left: 0.75rem;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }
                ul, ol {
                    list-style-position: inside;
                    padding-left: 0.5rem;
                }
                li {
                    margin-bottom: 0.75rem;
                    line-height: 1.6;
                }
            </style>
            <h2>${title}</h2>
            <img src="${thumbnail}" alt="${title} 썸네일">
            <h3><i class="fas fa-carrot"></i> 재료</h3>
            <ul>
                ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3><i class="fas fa-stream"></i> 조리 방법</h3>
            <ol>
                ${instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
        `;
    }
}

customElements.define('recipe-card', RecipeCard);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipe-form');
    const urlInput = document.getElementById('youtube-url');
    const extractButton = document.getElementById('extract-button');
    const buttonText = extractButton.querySelector('.button-text');
    const loadingSpinner = extractButton.querySelector('.loading-spinner');
    const recipeDisplay = document.getElementById('recipe-display');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const url = urlInput.value;
        if (!url) return;

        buttonText.textContent = '추출 중...';
        loadingSpinner.style.display = 'inline-block';
        extractButton.disabled = true;
        recipeDisplay.innerHTML = '';

        const tanghuluRecipe = {
            title: "초간단 딸기 탕후루 만들기",
            thumbnail: "https://i.ytimg.com/vi/ptW7zemegL8/hqdefault.jpg",
            ingredients: [
                "딸기 15개",
                "설탕 200g",
                "물 100ml",
                "물엿 1스푼",
                "나무 꼬치"
            ],
            instructions: [
                "깨끗이 씻은 딸기의 꼭지를 제거하고 물기를 완벽하게 닦아주세요.",
                "딸기를 나무 꼬치에 3-4개씩 꽂아줍니다.",
                "냄비에 설탕과 물을 2:1 비율로 넣고 중불에서 끓입니다. (절대 젓지 마세요!)",
                "시럽이 끓기 시작하면 물엿을 넣고 약 5-7분간 더 끓여줍니다.",
                "찬물에 시럽을 한 방울 떨어뜨렸을 때 바로 사탕처럼 굳으면 불을 끕니다.",
                "준비된 딸기 꼬치에 시럽을 빠르게, 그리고 얇게 코팅합니다.",
                "종이 호일 위에 올려두고 시럽이 완전히 굳을 때까지 식히면 완성!"
            ]
        };

        const recipeCard = document.createElement('recipe-card');
        recipeCard.setAttribute('title', tanghuluRecipe.title);
        recipeCard.setAttribute('thumbnail', tanghuluRecipe.thumbnail);
        recipeCard.setAttribute('ingredients', JSON.stringify(tanghuluRecipe.ingredients));
        recipeCard.setAttribute('instructions', JSON.stringify(tanghuluRecipe.instructions));

        recipeDisplay.appendChild(recipeCard);

        buttonText.textContent = '레시피 추출';
        loadingSpinner.style.display = 'none';
        extractButton.disabled = false;
        urlInput.value = '';
    });
});
