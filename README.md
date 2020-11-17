# Chu Trình xây dựng project
1. Xách định yêu cầu đề bài: 
   - Hiển thị list nhạc: title
   - list nhạc khi click vào sẽ hiện ra chi tiết: title Duration
2. xách định các component:
   -App: quản lý các componet chon
     + songList: hiện list nhạc
     + songDetail: hiện chi tiết
3. xác định state là local state hay global: 
   - Do songList cần nhạc state để hiển thị và trả về 1 cái hành động khi được click
   - Do songSelected sẽ nhận state để hiện thị
   - Nên State sẽ là gobal State

4. Xây dựng thư mục
   - Action: tạo index.js chứa các action Creator function: return  SELECT__SONG action object
   - Reducer: tạo index.js chứa các reducer function: songListReducer, songSelectedReducer 
   - Store: này lưu trong index.js của src
   - Components: chứa các component: APP, songList, songDetail
5. Tạo action  creator func:
   - Function: selectSong
   - input: song
   - Return: object action :  {type: SELECT__SONG , payload: song}
6. Tạo  reducer function:
   - function : songListReducer
     + return: arr chứa các obj song
   - function: songSelectedReducer
     + input: songSelected (current State) , action obj
     + condition: action.type === "SELECT__SONG" 
     + true: return  action.payload ( obj)
     + false: return => songSelected
   - Combine các reducer function lại với nhau để tạo store
     + store: reducer function ( like argument)
     + songs: songListReducer
     + songSelected: songSelectedReducer
7. Connection react to redux
   - Sử dụng provied để wrap dự án vào bên trong
   - Provied nhận store chứa các reducer function
   - bên trong chứa APP component
8. Tạo 1 APP component chứa 2 component con
9. Tạo component songList
   - sử dụng connect: 
     + lấy current state: {songs, songSelectd} bằng cách sử dụng mapStateToProps
     + lấy dispatch {selectSong} bằng cách sử dụng dispatchToProps
   - Component sẽ nhận props với current state và dispatch
   - sử dụng map để render list props.songs
   - sử dụng onclick để kích hoạt dispatch với song 
10. Tạo componet songDetail
   - sử dụng connect: 
     + lấy current state: { songSelectd }  bằng cách sử dụng mapStateToProps
   - Component sẽ nhận props với current state
   - Hiển thị ra màn hình

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
