(() => {
    
    // make an AJAX request using Fetch API
    fetch('./data/classData.json')
        .then(res=> res.json())  
        .then (data => {
            
            console.log(data);
    
            // handleData
            // here's where you would call the function that puts the piece on the page
        
            console.log(data.coursename);
        
            function content(data) {
                let profpanel = document.querySelector('.profPanel');
                let prof = profpanel.querySelector('.profname');
                let output = profpanel.querySelector('.text-muted');
                let time = profpanel.querySelector('.list-inline');
                
    
                output.innerHTML = data.coursename + " - " + data.coursecode;
                prof.innerHTML = data.profname;
                time.innerHTML = data.classtime;
                
            }
    
            content(data);
        })

        .catch((err) => {
            console.log(err);
        })
    
    })();
    