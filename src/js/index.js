// app selectors
let app = document.querySelector('#app');
let abo = document.querySelector('#abo');
let hed = document.querySelector('#hed');
let edt = document.querySelector('#edt');
let tml = document.querySelector('#tml');
let mdl = document.querySelector('#mdl');

// nav selectors
let nav = document.querySelector('#nav');
let opn = document.querySelector('#opn');
let icn = document.querySelector('#icn');
let nvu = document.querySelector('#nvu');

// btn selectors
let btn_nav = document.querySelector('#btn_nav');
let btn_ext = document.querySelector('#btn_ext');
let btn_sub = document.querySelector('#btn_sub');
let btn_edt = document.querySelector('#btn_edt');
let btn_tml = document.querySelector('#btn_tml');
let btn_mdl = document.querySelector('#btn_mdl');

// utl selectors
let pos;

/*
    EVENTS

        1. ev : btn_nav
        2. ev : btn_run
        3. ev : btn_sub
        4. ev : btn_ext
        5. ev : btn_edt
        6. ev : btn_tml

*/

// 1. ev : btn nav
btn_nav.addEventListener('click', ()=> {

    // validate nav height
    if (nav.style.display.height != '90vh') {
        
        // apply a transition to nav elemnt
        nav.style.transition = 'all 420ms ease';

        // apply height to nav element
        nav.style.height = '90vh';
    
    }
    // validate nav ul
    if (nvu.style.display == 'none') {
    
        // display nav ul
        nvu.style.display = 'flex';
    }
    // validate btn class
    if (icn.className == 'fas fa-bars') {
    
        // change btn class
        icn.className = 'fas fa-times';
    }
    else {
    
        // reset nav height to default
        nav.style.height = '15vh';
        // hide nav ul
        nvu.style.display = 'none';
        // default btn class
        icn.className = 'fas fa-bars';

    }

});

// 2. ev : btn run
btn_run.addEventListener('click', ()=> {

    // init run
    run();

});

// 3. ev : btn sub
btn_sub.addEventListener('click', (e)=>{

    // prevent form submit
    e.preventDefault();
    
    // init validate function
    val();

    // test
    console.log('sub btn clicked');

});

// 4. ev : btn ext
btn_ext.addEventListener('click', ()=> {

    // validate mod
    if (mdl.style.display != 'none') {
        // default mdl style
        mdl.style.display = 'none';
        bdy.style.overflow = 'auto';

        // test
        console.log('mod removed');
        console.log('form removed');
    }
    else {
        // mdl active
        mdl.style.display = 'grid';
    }

});

// 4. ev : btn edt

// 5. ev : btn tml

/*
    FUNCTIONS
        1.  fn : mob
        2.  fn : run
        3.  fn : mod
        4.  fn : val
        5.  fn : out
        6.  fn : edt
        7.  fn : tml
        8.  fn : scy
        9.  fn : cal
        10. fn : uns
*/

// 1. fn : mob
mob = () => {

    // assign nav height
    nav.style.height = '15vh';
    // hide nav ul
    nvu.style.display = 'none';

};

// init mob
mob();

// 2. fn : run
run = () => {

    // init mod
    mod();

};

// 3. fn : mod
mod = () => {

    // init scy
    scy();
    
    // validate form
    if (mdl.style.display == 'none') {
        // display mod
        mdl.style.display = 'grid';
        mdl.style.transition = '300ms all ease';
        
        // mdl style
        mdl.style.position = 'absolute';
        mdl.style.top = '0';
        mdl.style.left = '0';
        mdl.style.width = '100%';
        mdl.style.height = '100%';
        mdl.style.background = 'var(--black)';
        mdl.style.zIndex = '999';
        mdl.style.marginTop = pos + 'px';
        
        // test
        console.log('modal active');
    }
    // validate body overflow
    if (bdy.style.overflow != 'hidden') {
        // apply overflow to body
        bdy.style.overflow = 'hidden';
    }
    else {
        // default mdl style
        mdl.style.display = 'none';
        bdy.style.overflow = 'auto';

        // test
        console.log('mod removed');
        console.log('form removed');
    }

    // append elements to app
    app.appendChild(mdl);

    // test
    console.log('mdl appended to app');
};

// 4. fn : val 
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

        // test
        console.log('validation passed, resetting form');

        // init out
        out();

        // test
        console.log('init out');

    }

}

// 5. fn : out
out = () => {

    // validate views
    if (bdy.style.overflow == 'hidden') {
        bdy.style.overflow = 'auto';
    }
    if (mdl.style.display != 'none') {
        mdl.style.display = 'none';

        // test
        console.log('mdl removed');
    }
    if (hed.style.display != 'none') {
        hed.style.display = 'none';

        // test
        console.log('hed removed');
    }
    if (abo.style.display != 'none') {
        abo.style.display = 'none';
        
        // test
        console.log('run removed');
    }
    
    // out creator
    let out = document.createElement('section');
    let plh = document.createElement('h2');
    
    // out style
    out.style.position = 'relative';
    out.style.background = 'lightblue';
    
    // placeholder txt
    plh.innerHTML = 'placeholder text for output';
    plh.style.border = 'var(--debugging)';
    plh.style.position = 'absolute';
    plh.style.top = '0';
    plh.style.left = '0';
    plh.style.width = '100%';
    plh.style.height = '100%';
    plh.style.display = 'flex';
    plh.style.justifyContent = 'center';
    plh.style.alignItems = 'center';
    
    // append plh to out
    out.appendChild(plh);
    // append out to app
    app.appendChild(out);

    // test
    console.log('out view...'); // out here
};

// 6. fn : edt
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

// 7. fn : tml
tml = () => {
    
    // validate tml
    if (tml.style.display = 'none') {
        
        // display tml
        tml.style.display = 'grid';
        
        // remove app elements
        hed.style.display = 'none';
        edt.style.display = 'none';
        run.style.display = 'none';
    }
    else {

        // default tml style
        tml.style.diplay = 'none';
    }

};

// 8. fn : scy
scy = () => {
    
    // window position
    pos = window.scrollY;
    
    // test
    console.log(pos + 'px');
};

// 9. fn : cal

// 10. fn : uns
uns = () => {

    // unsplash api key
    let key = [];

    // test
    console.log('uns active, awaiting action...');

}