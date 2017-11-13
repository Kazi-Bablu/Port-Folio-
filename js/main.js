<script>
    var index=1;
    showdiv(index);
    function getdiv(n){
        showdiv(index +=n);
    }
    function showdiv(n){
        var 1;
        var a = document.getElementsByClassName("item");
        if(n>a.length){
            index = 1;
        }
        if(n<i){
            index = a.length;
        }
        for(i=0;i<a.length;i++){
            a[i].style.display = "none";
        }
        a[index-1].style.display = "block";
    }
</script>
