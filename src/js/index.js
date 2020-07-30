// app selector
let hps = document.querySelector('#hps');
// view selectors
let wel = document.querySelector('#wel');
let frm = document.querySelector('#frm');
let tml = document.querySelector('#tml');
let edt = document.querySelector('#edt');


// btn selectors
let run = document.querySelector('#run');
let sub = document.querySelector('#sub');
let ext = document.querySelector('#ext');

// inner btn selectors
let edd = document.querySelector('#edd');
let cll = document.querySelector('#cll');
let unn = document.querySelector('#unn');

// frm selectors
let cou = document.querySelector('#cou');
let loc = document.querySelector('#loc');
let str = document.querySelector('#str');
let end = document.querySelector('#end');

// list selectors
let uli = document.querySelector('#uli');

/* 
    functions
    
    1. fn viw
    2. fn app
    3. fn val
    4. fn out
    5. fn pnb
    
    // under development // under development // under development

    x. fn clr
    x. fn edi
    x. fn uns

    // under development // under development // under development

*/

// 1. fn : viw
viw = () => {
    
    // validate wel
    if (wel.style.display != 'none') {
        // remove wel
        wel.style.display = 'none';
        // test
        console.log ('viw : wel removed');
    }
    // validate frm
    if (frm.style.display != 'none') {
        // remove frm
        frm.style.display = 'none';
        // test
        console.log ('viw : frm removed');
    }
    // validate col
    else if (col.style.display != 'none') {
        // remove cus
        col.style.display = 'none';
        // test
        console.log ('viw : col removed');
    }
    // validate edi
    else if (edt.style.display != 'none') {
        // remove clr
        edt.style.display = 'none';
        // test
        console.log ('viw : clr removed');
    }
    else {
        // default views
        wel.style.display = 'none';
        frm.style.display = 'none';
        col.style.display = 'none';
        edt.style.display = 'none';
        
        // test
        console.log('viw : conditions not met');
    }

};

// 2. fn : app 
app = () => {

    // init viw
    viw();

    // validate frm
    if (frm.style.display != 'grid') {
        // display frm
        frm.style.display = 'grid';
        // test
        console.log('app : frm view');
    }
    else {
        // test
        console.log('app : conditions not met');
    }
    
    // append frm to hps
    hps.appendChild(frm);
    
    // test
    console.log('app : running');

};

// 3. fn : val
val = () => {

    // init viw
    viw();

    // form error selectors
    let err_cou = document.querySelector('#err_cou');
    let err_loc = document.querySelector('#err_loc');
    let err_str = document.querySelector('#err_str');
    let err_end = document.querySelector('#err_end');

    // validate cou input
    if (cou.value == '' || cou.value == null) {
        
        // provide error msg
        err_cou.innerHTML = 'please fill in a country';
        
        // error msg styles
        err_cou.style.color = 'white';
        err_cou.style.fontStyle = 'italic';
        err_cou.style.textDecoration = 'underline';
        
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
        err_loc.innerHTML = 'please fill in a location or destination';

        // error msg styles
        err_loc.style.color = 'white';
        err_loc.style.fontStyle = 'italic';
        err_loc.style.textDecoration = 'underline';
        
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
        err_str.innerHTML = 'please fill in a location or destination';

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
        err_end.innerHTML = 'please fill in a location or destination';

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
        err_cou.innerHTML = '';
        err_loc.innerHTML = '';
        err_str.innerHTML = '';
        err_end.innerHTML = '';
        
        // reset error borders
        cou.style.border = '2px solid var(--black)';
        loc.style.border = '2px solid var(--black)';
        str.style.border = '2px solid var(--black)';
        end.style.border = '2px solid var(--black)';

        // test
        console.log('validation passed, resetting form');

        // init x
        out();

        // test
        console.log('init out');

    }

};

// 4. fn out
out = () => {

    // validate tml
    if (tml.style.display != 'grid') {
        // display tml
        tml.style.display = 'grid';
        // test
        console.log('out : tml running');
    }
    else {
        // test
        console.log('out : conditions not met');

    }

    // li creator
    let li = document.createElement('li');
    
    // assign class to li
    li.setAttribute('class', 'pnl');

    // output creators
    let out_cou = document.createElement('p');
    let out_loc = document.createElement('p');
    let out_str = document.createElement('p');
    let out_end = document.createElement('p');

    // assign frm input to li content
    out_cou.innerHTML = cou.value + '<br>';
    out_loc.innerHTML = loc.value + '<br>';
    out_str.innerHTML = str.value + '<br>';
    out_end.innerHTML = end.value + '<br>';

    // append out values to li content
    li.appendChild(out_cou);
    li.appendChild(out_loc);
    li.appendChild(out_str);
    li.appendChild(out_end);

    // append li to uli
    uli.appendChild(li);

    // li loop
    for (let i = 0; i < li.length; i++) {
        
        
        // ev : des
        li[i].addEventListener('click', ()=> {

            // btn selector
            let btn = document.querySelector('#btn');

            // validate btn
            if (btn.style.display == 'none') {
                // display btn
                btn.style.display = 'flex';
                // test
                console.log('des loop : btn running');
            }
            else {
                // test
                console.log('des loop : conditions not met');
            }

            // append btn to li
            li.appendChild(btn);
            
            // test
            console.log('li loop : running');

        });

        
    };

    // init pnb
    pnb();

    // test
    console.log('out : running');

};

// 5. fn : pnb
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
                console.log('pnb : btn flex');
            }
            else {

                // remove btn
                btn.style.display = 'none';

                // test
                console.log('pnb : btn none')
            }
        

        });
    
    };

};

// x. fn edi
edi = () => {

    // validate edt
    if (edt.style.display != 'grid') {
        // display edt
        edt.style.display = 'grid';
    }
    else {
        // default
        console.log('edi : default');
    }
    

};


/*
    events : btn

    1. ev run
    2. ev sub
    3. ev ext
    4. ev add

*/

// 1. ev : run
run.addEventListener('click', ()=> {

    // init app
    app();

    // test
    console.log('run : init fn app');

});

// 2. ev : sub
sub.addEventListener('click', (e)=> {

    // prevent form submit
    e.preventDefault();
    
    // init val
    val();
    
    // test
    console.log('sub : init fn val');

});

// 3. ev : ext
ext.addEventListener('click', ()=> {

    // validate frm
    if (frm.style.display != 'none') {
        // remove frm
        frm.style.display = 'none';

        // test
        console.log('ext : frm removed');
    }
    // validate tml
    if (tml.style.display == 'grid') {
        // remove wel
        wel.style.display = 'none';
    }
    else {
        // default no tml
        wel.style.display = 'grid';

        // test
        console.log('ext : default');
    }

    // test
    console.log('ext : active');

});

// 4. ev : add
add.addEventListener('click', ()=> {

    // init app
    app();

    // test
    console.log('add : init fn app');

});



// under development // under development // under development

let sav = document.querySelector('#sav');
let del = document.querySelector('#del');

// under development // under development // under development