(() => {
    let testimonials = [
        {
            image: 'customer-0',
            name: 'John',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?'
        },
        {
            image: 'customer-1',
            name: 'Sandy',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
        },
        {
            image: 'customer-2',
            name: 'Amy',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
        },
        {
            image: 'customer-3',
            name: 'Tyrell',
            text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
        },
        {
            image: 'customer-4',
            name: 'Wanda',
            text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    ]
    
    const customerImage = document.getElementById('customer-img');
    const customerName = document.getElementById('customer-name');
    const customerText = document.getElementById('customer-text');
    const buttons = document.querySelectorAll('.btn');
    let counter = 0;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.classList.contains('nextBtn')){
                counter++;
                if(counter > testimonials.length -1){
                    counter = 0;
                }
                customerImage.src = `./img/${testimonials[counter].image}.jpg`;
                customerName.textContent = testimonials[counter].name;
                customerText.textContent = testimonials[counter].text;
            } else if(button.classList.contains('prevBtn')){
                counter--;
                if(counter < 0){
                    counter = testimonials.length -1;
                }
                customerImage.src = `./img/${testimonials[counter].image}.jpg`;
                customerName.textContent = testimonials[counter].name;
                customerText.textContent = testimonials[counter].text;
            } 
        })
    })
})();



