import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Todo} from '../../interfaces/todo'
import FormInputText from "../ui-elements/FormInputText";
import Button from "../ui-elements/Button"

function TodoListTemplate() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    // 追加フォーム入力内容取得
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    // 追加フォーム入力内容登録
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();  // submit による画面遷移回避

        const newTodo: Todo = {
            input: input,
            id: todos.length,
            isChecked: false,
        };

        setTodos([newTodo, ...todos]);
        setInput("");
    };

    // リスト内のタスク名変更
    const handleEdit = (id: number, input: string) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.input = input;
            }
            return todo;
        });

        setTodos(newTodos);
    }

    // タスクが完了したかどうかの確認
    const handleCheck = (id: number, isChecked: boolean) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isChecked = !isChecked;
            }
            return todo;
        });

        setTodos(newTodos);
    }

    // タスクの削除
    const handleDelete = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <div className="bg-teal-200 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
                <h1 className="text-grey-darkest text-2xl">Todo</h1>
                <form
                    className="flex mt-4"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <FormInputText
                        className="input-text shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                        onChange={(e: any) => handleChange(e)}
                        placeholder="Add Todo"
                        value={input}
                    />
                    <Button
                        type="submit"
                        className="submit-button flex-no-shrink p-2 border-2 rounded text-teal border-teal-700 hover:text-white hover:bg-teal-700"
                    >
                        Add
                    </Button>
                </form>
            </div>
            <div className="todolist mb-4 items-center">
                { todos.map(todo => (
                    <div key={ todo.id } className="flex m-3">
                        <FormInputText
                            onChange={(e: any) => handleEdit(todo.id, e.target.value)}
                            className="input-text shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-600"
                            value={ todo.input }
                            disabled={ todo.isChecked }
                        />
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(todo.id, todo.isChecked)}
                        />
                        <Button
                            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red-600 hover:text-white hover:bg-red-600"
                            onClick={() => handleDelete(todo.id)}
                        >
                            Remove
                        </Button>
                    </div>
                )) }
            </div>
        </div>
    );
}

export default TodoListTemplate;