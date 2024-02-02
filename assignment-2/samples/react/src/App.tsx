import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import "./App.css";

function App() {
  return (
    <form className="container">
      <table className="table">
        <tr className="tr">
          <th className="th">氏名</th>
          <td>
            <TextField
              placeholder="(例)トレタ 太郎"
              size="small"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  width: "230px",
                  height:"30px",
                  fontSize: "12px"
                }
              }}
            />
          </td>
        </tr>

        <tr className="tr">
          <th className="th">Eメール</th>
          <td>
            <TextField
              placeholder="(例)yoyaku@toreta.in"
              size="small"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  width: "230px",
                  height:"30px",
                  fontSize: "12px"
                }
              }}
            />
          </td>
        </tr>

        <tr className="tr">
          <th className="th">郵便番号</th>
          <td>
            <TextField
              placeholder="(例)0000000"
              size="small"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  width: "100px",
                  height:"30px",
                  fontSize: "12px"
                }
              }}
            />
          </td>
        </tr>

        <tr className="tr">
          <th className="th">都道府県</th>
          <td>
            <FormControl
              sx={{
                "& .MuiInputBase-root": {
                  width: "230px",
                  height:"30px",
                  fontSize: "12px"
                }
              }}
            >
              <Select size="small" value="*">
                <MenuItem value="*">
                  <span style={{ opacity:0.38 }}>選択してください</span>
                </MenuItem>
                <MenuItem value="北海道">北海道</MenuItem>
                <MenuItem value="東京都">東京都</MenuItem>
                <MenuItem value="愛知県">愛知県</MenuItem>
                <MenuItem value="大阪府">大阪府</MenuItem>
                <MenuItem value="福岡県">福岡県</MenuItem>
              </Select>
            </FormControl>
          </td>
        </tr>

        <tr className="tr">
          <th className="th">市町村・番地</th>
          <td>
            <TextField
              placeholder="(例)品川区西五反田７丁目２２−１７"
              size="small"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  width: "230px",
                  height:"30px",
                  fontSize: "12px"
                }
              }}
            />
          </td>
        </tr>

        <tr className="tr">
          <th className="th">建物名・号室</th>
          <td>
            <TextField
              placeholder="(例)TOCビル 8F"
              size="small"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  width: "230px",
                  height:"30px",
                  fontSize: "12px"
                }
              }}
            />
          </td>
        </tr>
      </table>

      <button className="button" type="submit">登録</button>
    </form>
  );
}

export default App;
