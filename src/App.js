import { useState } from 'react';
import useDelete from './hooks/delete';

function App() {
  
  const initArray = ['Huyen', 'Hoa', 'Hung', 'Long'];
  
  const [displayList, handleChange, handleDeleteName] = useDelete();
  
  const [delName, setDelName] = useState('');

  const [students, setStudents] = useState(initArray);

  return (
    <ul>
      <h3>学生一覧: [{displayList(initArray)}]</h3>
      <h3>削除値を入力してください</h3>
      <input onChange={(e) => handleChange(e, setDelName)}></input>
      <br/>
      <button style={{ marginLeft: 150, marginTop: 10 }} onClick={() => handleDeleteName(students, delName, setStudents)}>削除</button>
      <h3>削除する名前：{delName}</h3>
      <h3>新しい一覧：[{displayList(students)}]</h3>
    </ul>
  );
}

export default App;