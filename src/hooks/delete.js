function useDelete() {
    
    const displayList = (list) => {
        return list.join(', ');
    }
    
    const handleChange = (event, setNewValue) => {
        setNewValue(event.target.value);
    }
    
    const handleDeleteName = (list, name, setList) => {
        setList(list.filter((x) => x !== name));
    }
    
    return [displayList, handleChange, handleDeleteName];
}

export default useDelete;