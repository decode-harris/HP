/*

    [ HP ] : Holiday Planner Web Application

    Scope :
    
            develop an easy & intuitive planning process for future travellers
            helps in planning out destinations, timeframes, activities & more

    Features :

            unsplash api for image attach
            combine list items to produce a holiday timeline
            create, remove, update, delete & edit the existing timeline
            save to cloud [ db ], save to local device [ pc / mob ], save to local storage [ web ]

*/

// app selector
const app = document.querySelector('#app');

// mod selector
let mod;

// form selectors
let cou = document.querySelector('#cou');
let loc = document.querySelector('#loc');
let str = document.querySelector('#str');
let end = document.querySelector('#end');

// button selectors
let sub = document.querySelector('#sub');

// event sub : submit button
sub.addEventListener('click', (e)=>{

    // prevent form submit
    e.preventDefault();
    
    // init validate function
    val();
    
    // test
    console.log('sub btn clicked');

});

/*
    val function

    init on click of submit button
    validate cou, loc, str + end date
    provide error msg to user
    init run function on completion

*/
val = () => {

    // form error selectors
    let cou_err = document.querySelector('#cou_err');
    let loc_err = document.querySelector('#loc_err');
    let str_err = document.querySelector('#str_err');
    let end_err = document.querySelector('#end_err');

    // validate cou input
    if (cou.value == '' || cou.value == null) {
        
        // provide error msg
        cou_err.innerHTML = 'please fill in a country';
        
        // error msg styles
        cou_err.style.color = 'white';
        cou_err.style.fontStyle = 'italic';
        cou_err.style.textDecoration = 'underline';
        
        // error element styles
        cou.style.border = ' 2px solid red';
        cou.style.background = 'var(--ovl-drk)';
        cou.style.color = 'var(--white)';

        // focus error element
        cou.focus();

        // test
        console.log('country input error');
    
    }
    // validate loc input
    else if (loc.value == '' || loc.value == null) {

        // provide error msg
        loc_err.innerHTML = 'please fill in a location or destination';

        // error msg styles
        loc_err.style.color = 'white';
        loc_err.style.fontStyle = 'italic';
        loc_err.style.textDecoration = 'underline';
        
        // error element styles
        loc.style.border = ' 2px solid red';
        loc.style.background = 'var(--ovl-drk)';
        loc.style.color = 'var(--white)';

        // focus error element
        loc.focus();

        // test
        console.log('location input error');
    
    }
    // validate str date
    else if (str.value == '' || str.value == null) {
        
        // provide error msg
        str_err.innerHTML = 'please fill in a location or destination';

        // visual user alert
        str.style.border = ' 2px solid red';

        // focus error element
        str.focus();

        // test
        console.log('start date input error');
        
    }
    // validate end date
    else if (end.value == '' || end.value == null) {
        
        // provide error msg
        end_err.innerHTML = 'please fill in a location or destination';

        // visual user alert
        end.style.border = ' 2px solid red';

        // focus error element
        end.focus();

        // test
        console.log('end date input error');
    
    }
    else {
        
        // reset input backgrounds
        cou.style.background = 'var(--white)';
        loc.style.background = 'var(--white)';
        str.style.background = 'var(--white)';
        end.style.background = 'var(--white)';

        // reset input text color
        cou.style.color = 'var(--black)';
        loc.style.color = 'var(--black)';
        str.style.color = 'var(--black)';
        end.style.color = 'var(--black)';
        
        // reset error msg
        cou_err.innerHTML = '';
        loc_err.innerHTML = '';
        str_err.innerHTML = '';
        end_err.innerHTML = '';
        
        // reset error borders
        cou.style.border = '2px solid var(--black)';
        loc.style.border = '2px solid var(--black)';
        str.style.border = '2px solid var(--black)';
        end.style.border = '2px solid var(--black)';

        // init run function
        run();

        // test
        console.log('validation passed, resetting form');

    }

}

/*
    run function

    initiated after validation function has been run
    produce a preview modal for users
    provides visual feedback
    enables background attachment and editing functions

*/
run = () => {

    // mod creation
    let mod = document.createElement('section');
    
    // ele creation
    let ele = document.createElement('div');
    
    // ul creation
    let ul = document.createElement('ul');
    
    // li creation
    let li = document.createElement('li');
    
    // btn creation
    let ext = document.createElement('button');

    // mod styles
    mod.style.position = 'absolute';
    mod.style.top = '0';
    mod.style.left = '0';
    mod.style.width = '100%';
    mod.style.height = '100%';
    mod.style.background = 'var(--ovl-drk)';
    mod.style.zIndex = '100';

    // ele styles
    ele.className = 'elmnts';
    ele.style.gridColumn = 'span 6';
    ele.style.gridRow = 'span 2';

    // ul styles
    ul.style.display = 'flex';
    ul.style.flexDirection = 'column';
    ul.style.justifyContent = 'space-between';
    ul.style.alignItems = 'center';
    ul.style.height = '100%';
    ul.style.width = '100%';

    // li styles
    li.style.width = '100%';
    li.style.height = '100%';

    // output creation
    let h3 = document.createElement('h3');
    let h5 = document.createElement('h5');
    let ds = document.createElement('span');
    let de = document.createElement('span');
    
    // assign input value to output elmnts
    h3.innerHTML = cou.value;
    h5.innerHTML = loc.value;
    ds.innerHTML = str.value;
    de.innerHTML = end.value;

    // append values to li
    li.appendChild(h3);
    li.appendChild(h5);
    li.appendChild(ds);
    li.appendChild(de);

    // append li to ul
    ul.appendChild(li);
    
    // append ul to ele
    ele.appendChild(ul);

    // append ele to mod
    mod.appendChild(ele);

    // append mod to app
    app.appendChild(mod);

    // event li : edt function
    li.addEventListener('click', edt());

    // test
    console.log('run active, modal loaded');

}

/*
    edt function [ -- still in testing phase -- ]

    init during prv / mod cycle
    allow user to edit all elements in object
    provide user with background & color opt

    -- change event from edt to li object in production --


*/
edt = () => {
    
    // prv selector
    let prv = document.getElementsByClassName('prv');

    // loop through prv
    for (let i = 0; i < prv.length; i++) {

        // add event to prv
        prv[i].addEventListener('click', () => {

            // assign prv position to relative for mod attachment
            prv[i].style.position = 'relative';

            // validate prv background color
            if (prv[i].style.background != 'var(--ovl-drk)') {
                
                // provide visual cues
                prv[i].style.background = 'var(--ovl-drk)';
                prv[i].style.color = 'var(--white)';
            }
            else {

                // reset prv to default
                prv[i].style.background = 'var(--white)';
            }
        
        });

        // test
        console.log(prv[i]);
    }
    

}

// init edit
edt();

/*
    uns function

    provide in-app link to unsplash photo database
    search for images related user destination
    allow users to attach image as background or header

    -- any misc unsplash features the api provides --

*/
uns = () => {

    // unsplash api key
    let key = [];

    // test
    console.log('uns active, awaiting action...');

}