console.log('this is news api project')

const apiKey = '8af091e75910478b8d235c8f67c05f0c';
let source = 'the-times-of-india';
// const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;

const xhr = new XMLHttpRequest();
xhr.open('Get', url, true)

xhr.getResponseHeader('content-type', 'application/json')

xhr.onprogress = function onway() {
    console.log('object')
}

xhr.onload = function result() {
    console.log('loaded')
    // console.log(this.responseText)
    // console.log(this.json(responseText))  --> think before writing ,ye nahi work karega 
    console.log(JSON.parse(this.responseText))

    // const article=JSON.parse(this.responseText)
    // console.log(article.articles)

    // const odata=this.responseText;
    // console.log(JSON.parse(odata))

    const odata = JSON.parse(this.responseText);
    const article = odata.articles;
    console.log(article);

    /*
    // testing 
    article.forEach(element => {
        console.log(element)
        console.log(element.title)
        console.log(element.description)
    });
    */


    article.forEach((element, index) => {
        //    console.log(element)
        //    console.log(element.title)
        //    console.log(element.description)

        const divBody = document.getElementById('accordionFlushExample')

        let addstr = `<div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            News No :${index + 1}
            <br/>
            <h3>${element.title}<h3/>
        </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">${element.description}</div>
    </div>
</div>`

        divBody.innerHTML += addstr;
    });



    let addstr = `<div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
        </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
            <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
</div>`
}

xhr.send();