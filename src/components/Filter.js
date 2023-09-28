import './Filter.css'

function Filter({data,category,setCategory}){
    function filterData(title){
        setCategory(title);
    }
    return(
        <div className="filter">
            {
                data.map((data_set) =>{
                    console.log(data.title)
                    return <button className={category===data_set.title ? "filter_btn_clicked" : "filter_btn_not"} onClick={()=>filterData(data_set.title)}>{data_set.title}</button>
                })
            }
        </div>
    )
}

export default Filter;