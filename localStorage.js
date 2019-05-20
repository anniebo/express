window.addEventListener("load", function () {
			createSelect();
            if (window.localStorage.pageColor) {
                document.body.className = window.localStorage.pageColor + " " + window.localStorage.selectedSize;
            }
			
            document.getElementById("saveButton").addEventListener("click", function () {
                var selectedColor = document.getElementById("color").value;
				var selectedSize = document.getElementById("fsize").value;
                window.localStorage.pageColor = selectedColor;
				window.localStorage.selectedSize = selectedSize;
                document.body.className = window.localStorage.pageColor + " " + window.localStorage.selectedSize;
            });
			
			document.getElementById("saveToDo").addEventListener("click", function () {
                var selectedName = document.getElementById("name").value;
				var selectedText = document.getElementById("todo").value;
				var a = window.localStorage.todolist ? JSON.parse(window.localStorage.todolist) : [];
				var todolist = {};
				todolist.title = selectedName;
				todolist.name = selectedText;
				a.push(todolist);
				window.localStorage.setItem('todolist', JSON.stringify(a));
				createSelect();
            });
			
			document.getElementById("deleteToDo").addEventListener("click", function () {
				var a = window.localStorage.todolist ? JSON.parse(window.localStorage.todolist) : [];
				var title = document.getElementById("dlt").value;
				for(var key in a){
					if (a[key].title == title) a.splice(key, 1);
						
				}
				window.localStorage.setItem('todolist', JSON.stringify(a));
				createSelect();
			});
			
			function createSelect(){
				var keys = window.localStorage.todolist ? JSON.parse(window.localStorage.todolist) : [];
				
				var dl = document.getElementById("dlt");
				
				if (dl) while (dl.firstChild) {
					dl.removeChild(dl.firstChild);
				}
				else {
					dl = document.createElement("select");
					dl.setAttribute("id","dlt");
				}
				
				for(key in keys){
					
					var opt = document.createElement("option");
					opt.setAttribute("value", keys[key].title);
					opt.text = keys[key].title;
					dl.appendChild(opt);
				}
			}
			
        });