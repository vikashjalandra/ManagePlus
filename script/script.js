const hamBurger = document.querySelector('.cross-btn-image');
const navContent = document.querySelector('.navContent');
const header = document.querySelector('header');

hamBurger.addEventListener('click', () => {
    if (navContent.classList.contains('navHidden')) {
        navContent.classList.remove('navHidden');
    } else {
        navContent.classList.add('navHidden');
    }

    if(window.innerWidth < 768){
        if (header.classList.contains('h-full')) {
            header.classList.remove('h-full');
        } else{
            header.classList.add('h-full');
        }
    }
    console.log('clicked')
})




const navProducts = document.querySelector('#navProducts');
const navSolutions = document.querySelector('#navSolutions');
const navResources = document.querySelector('#navResources');
const navProductsDropdown = document.querySelector('#navProducts .navHoverContent');
const navSolutionsDropdown = document.querySelector('#navSolutions .navHoverContent');
const navResourcesDropdown = document.querySelector('#navResources .navHoverContent');
const productsAnchor=  document.querySelector('#navProducts .anchor');
const solutionsAnchor=  document.querySelector('#navSolutions .anchor');
const resourcesAnchor=  document.querySelector('#navResources .anchor');

console.log(resourcesAnchor);



console.log(window.innerWidth>1024);

if(window.innerWidth>1024){

navProducts.addEventListener('mouseover', () => {
    navProductsDropdown.classList.remove('hidden');
    navProducts.classList.add('active');
});
navProducts.addEventListener('mouseout', () => {
    navProductsDropdown.classList.add('hidden');
    navProducts.classList.remove('active');
});

navSolutions.addEventListener('mouseover', () => {
    navSolutionsDropdown.classList.remove('hidden');
    navSolutions.classList.add('active');
}
);
navSolutions.addEventListener('mouseout', () => {
    navSolutionsDropdown.classList.add('hidden');
    navSolutions.classList.remove('active');
}
);

navResources.addEventListener('mouseover', () => {
    navResourcesDropdown.classList.remove('hidden');
    navResources.classList.add('active');
}
);
navResources.addEventListener('mouseout', () => {
    navResourcesDropdown.classList.add('hidden');
    navResources.classList.remove('active');
}
);

} else{
    productsAnchor.addEventListener('click', () => {
        if (navProductsDropdown.classList.contains('hidden')) {
            navProductsDropdown.classList.remove('hidden');
            navProducts.classList.add('active');
        } else {
            navProductsDropdown.classList.add('hidden');
            navProducts.classList.remove('active');
        }
    });

    solutionsAnchor.addEventListener('click', () => {
        if (navSolutionsDropdown.classList.contains('hidden')) {
            navSolutionsDropdown.classList.remove('hidden');
            navSolutions.classList.add('active');
        } else {
            navSolutionsDropdown.classList.add('hidden');
            navSolutions.classList.remove('active');
        }
    });

    resourcesAnchor.addEventListener('click', () => {
        if (navResourcesDropdown.classList.contains('hidden')) {
            navResourcesDropdown.classList.remove('hidden');
            navResources.classList.add('active');
        } else {
            navResourcesDropdown.classList.add('hidden');
            navResources.classList.remove('active');
        }
    });
}


const navSolSideItems = document.querySelectorAll('.navSolSideItem');
const solutionFilters = document.querySelectorAll('.solutionFilters');



navSolSideItems.forEach((item, index) => {
    item.addEventListener('click',()=>{
        solutionFilters.forEach((filter)=>{
            filter.classList.add('hidden');
        })
        solutionFilters[index].classList.remove('hidden');
    }
    )
}
)



