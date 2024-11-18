const smFeaturesCards = document.querySelectorAll('.smFeaturesCard');
const hoverFeaturesCards = document.querySelectorAll('.hoverFeaturesCard');

smFeaturesCards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        hoverFeaturesCards[index].classList.remove('hidden');
    });
    
    card.addEventListener('mouseout', () => {
        hoverFeaturesCards[index].classList.add('hidden');
    });
});