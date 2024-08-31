function showside(){
    if(document.getElementById('sidebar').style.display==='none'){
        document.getElementById('sidebar').style.display='block';
        document.getElementById('icon').className='bi-chevron-double-up icon'
        
    }else{
        document.getElementById('sidebar').style.display='none';
        document.getElementById('icon').className='bi-list icon'
    }
}