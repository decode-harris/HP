// app selectors
let app = document.querySelector('#app');
let mdl = document.querySelector('#mdl');
let hps = document.querySelector('#hps');


// sect selectors
let wel = document.querySelector('#wel');
let frm = document.querySelector('#frm');
let dis = document.querySelector('#dis');
let ovw = document.querySelector('#ovw');

let tml = document.querySelector('#tml');

// let usr = document.querySelector('#usr');

// utl selectors
let uli = document.querySelector('#uli');
let pos;

// btn selectors
let btn_run = document.querySelector('#btn_run');
let btn_add = document.querySelector('#btn_add');

    // under development
let btn_sub = document.querySelector('#btn_sub');

let btn_edt = document.querySelector('#btn_edt');

let btn_ext = document.querySelector('#btn_ext');

let btn_tml = document.querySelector('#btn_tml');


/*
    EVENTS

        
        1. ev : run
        2. ev : add
        3. ev : sub
        4. ev : ext
        5. ev : edt
        6. ev : tml

*/


// 1. ev : btn run
btn_run.addEventListener('click', ()=> {

    // init run
    run();

    // test
    console.log('app starting');

});

// 2. ev : btn add
btn_add.addEventListener('click', ()=>{

    // init run
    run();

    // test
    console.log('usr re-run prog active');

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
    
    // validate mdl
    if (mdl.style.display != 'none') {
        
        // default mdl style
        mdl.style.display = 'none';
        bdy.style.overflow = 'auto';
        
        // test
        console.log('ext : mdl none');
        
    }
    else {
        // mdl active
        mdl.style.display = 'grid';

        // test
        console.log('ext : mdl + frm');
    }

});

// 4. ev : btn edt
btn_edt.addEventListener('click', ()=> {

    // init edt
    edt();

});

// 5. ev : btn tml

/*
    FUNCTIONS
        
        1. fn : run
        2. fn : add
        3. fn : usr
        4. fn : mod
        5. fn : val
        6. fn : out
        7. fn : pnb
        8. fn : scy
        
        
// under development // under development // under development
// under development // under development // under development
        
        9.  fn : tml
        10.  fn : cal
        11. fn : uns

// under development // under development // under development
// under development // under development // under development

*/


// 1. fn : run
run = () => {

    // init mod
    mod();

    // init usr
    usr();

    // test
    console.log('run : active');
};

// 2. fn : add
add = () => {

    // init mod
    mod();

    // init usr
    usr();

    // test
    console.log('add : active');
};

// 3. fn : usr
usr = () => {

    // display frm
    frm.style.display = 'grid';

    // append frm to mdl
    mdl.appendChild(frm);

    // test
    console.log('frm : active');

}

// 4. fn : mod
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
        mdl.style.zIndex = '999';

        // adjust mdl to scy
        mdl.style.marginTop = pos + 'px';
        
        // test
        console.log('mdl : style');

    }
    // validate body overflow
    if (bdy.style.overflow != 'hidden') {
        
        // bdy overflow
        bdy.style.overflow = 'hidden';

        // test
        console.log('bdy : overflow');

    }
    else {
        // default mdl
        mdl.style.display = 'none';

        // default bdy
        bdy.style.overflow = 'auto';

        // test
        console.log('mdl : none');

    }

    // append mdl to app
    app.appendChild(mdl);

    // test
    console.log('mdl : active');

};

// 5. fn : val 
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

// 6. fn : out
out = () => {

    // validate views
    if (mdl.style.display != 'none') {

        // remove mdl
        mdl.style.display = 'none';

        // test
        console.log('mdl : removed');
    }
    if (wel.style.display != 'none') {

        // remove wel
        wel.style.display = 'none';
        
        // test
        console.log('wel : removed');
    }
    // validate overflow
    if (bdy.style.overflow != 'auto') {
        
        // overflow bdy
        bdy.style.overflow = 'auto';

        // test
        console.log('bdy : auto');
    }
    
    // init hps
    if (hps.style.display == 'none') {

        // display hps
        hps.style.display = 'grid';

        // test
        console.log('hps : grid');
    }
    
    // pnl creator
    let pnl = document.createElement('li');
    
    // pnl content
    let pnl_cou = document.createElement('span');
    let pnl_loc = document.createElement('span');
    let pnl_str = document.createElement('span');
    let pnl_end = document.createElement('span');

    // ul att : uli
    uli.setAttribute('id', 'uli');
    
    // pnl att : pnl
    pnl.setAttribute('class', 'pnl');

    // assign input value to pnl content
    pnl_cou.innerHTML = cou.value + '<br>';
    pnl_loc.innerHTML = loc.value + '<br>';
    
    pnl_str.innerHTML = str.value + '<br>';
    pnl_end.innerHTML = end.value + '<br>';

    // append panel content to pnl
    pnl.appendChild(pnl_cou);
    pnl.appendChild(pnl_loc);
    pnl.appendChild(pnl_str);
    pnl.appendChild(pnl_end);

    // append pnl to uli
    uli.appendChild(pnl);

    // init pnb
    pnb();

    // test
    console.log('out view...'); // out here

};

// 7. fn : pnb
pnb = () => {

    // pnl selector [ after pnl has been populated ]
    let pnl = document.getElementsByClassName('pnl');

    // pnl loop for ev attachment
    for (let i = 0; i < pnl.length; i++) {
        
        // test
        console.log(pnl[i]);
        
        // ev : pnl btn
        pnl[i].addEventListener('click', ()=> {

            // btn selector
            let btn = document.querySelector('#btn');

            // validate btn
            if (btn.style.display == 'none') {
                
                // display btn
                btn.style.display = 'flex';

                // append btn to pnl
                pnl[i].appendChild(btn);

                // test
                console.log('bts : btn flex');
            }
            else {

                // btn default
                btn.style.display = 'none';

                // remove btn from pnl
                // pnl[i].removeChild(btn);

                // test
                console.log('bts : btn none');

            }

        });
    
    };

};

// 8. fn : scy
scy = () => {
    
    // window position
    pos = window.scrollY;
    
    // test
    console.log(pos + 'px');
};


// under development // under development // under development
// under development // under development // under development

// 9. fn : cal

// 10. fn : uns
uns = () => {

    // unsplash api key
    let key = [];

    // test
    console.log('uns active, awaiting action...');

}


// 7. fn : edt
// edt = () => {
    
    
//     // validate views
//     if (frm.style.display == 'grid') {
        
//         // remove frm
//         frm.style.display = 'none';

//         // test
//         console.log('edt : frm none');
//     }

//     if (ovw.style.display == 'none') {
        
//         // display ovw
//         ovw.style.display = 'grid';

//         // test
//         console.log('edt : ovw grid');
//     }
//     else {

//         // default ovw
//         ovw.style.display = 'none';

//         // test
//         console.log('edt : ovw none');

//     }


//     // ev : pnl
//     pnl.addEventListener('click', ()=> {

//         let edt_frm = document.createElement('form');

//         // pnl span replacements
//         let edt_cou = document.createElement('input');
//         let edt_loc = document.createElement('input');
//         let edt_str = document.createElement('input');
//         let edt_end = document.createElement('input');

//         edt_frm.style.background = 'var(--white)';
//         edt_frm.style.height = '50vh';
//         edt_frm.style.width = '100%';

//         ovw.appendChild(edt_frm);

//         // test
//         console.log('ev : pnl');
//     });
        

    

//     // append ovw to app
//     app.appendChild(ovw);

// };


// box creator [ img placeholder ]
    // let box = document.createElement('div');
    
    // box style
    // box.style.position = 'absolute';
    // box.style.top = '0';
    // box.style.left = '0';
    // box.style.height = '100%';
    // box.style.width = '100%';
    // box.style.border = '2px solid var(--black)';

    // box.style.minHeight = '100px';
    // box.style.minWidth = '100px';

    // append box to pnl
    // pnl.appendChild(box);

    // pnl loop
    // for (let i = 0; i < pnl.length; i++) {

    //     // test
    //     console.log(pnl[i]);

    //     // ev : pnl
    //     pnl.addEventListener('click', ()=> {

    //         mod();
    //     });

    // }



// pnl loop var
// for (let i = 0; i < pnl.length; i++) {

//     pnl.style.border = '2px solid var(--white)';
//     pnl.style.background = '2px solid var(--black)';
//     pnl.style.color = 'var(--white)';

//     // test
//     console.log('loop pnl active');

//     // test
//     console.log(pnl[i]);

// }


// 6. fn : edt
// edt = () => {
    
//     // prv selector
//     let prv = document.getElementsByClassName('prv');

//     // loop through prv
//     for (let i = 0; i < prv.length; i++) {

//         // add event to prv
//         prv[i].addEventListener('click', () => {

//             // assign prv position to relative for mod attachment
//             prv[i].style.position = 'relative';

//             // validate prv background color
//             if (prv[i].style.background != 'var(--ovl-drk)') {
                
//                 // provide visual cues
//                 prv[i].style.background = 'var(--ovl-drk)';
//                 prv[i].style.color = 'var(--white)';
//             }
//             else {

//                 // reset prv to default
//                 prv[i].style.background = 'var(--white)';
//             }
        
//         });

//         // test
//         console.log(prv[i]);
//     }

// }

// // 7. fn : tml
// tml = () => {
    
//     // validate tml
//     if (tml.style.display = 'none') {
        
//         // display tml
//         tml.style.display = 'grid';
        
//         // remove app elements
//         hed.style.display = 'none';
//         edt.style.display = 'none';
//         run.style.display = 'none';
//     }
//     else {

//         // default tml style
//         tml.style.diplay = 'none';
//     }

// };

// under development // under development // under development
// under development // under development // under development

