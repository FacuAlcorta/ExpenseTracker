import './ExpenseForm.css';

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Título</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Monto</label>
                    <input type="number" min="0.01" max="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Fecha</label>
                    <input type="date" min="2020-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new_expense__actions">
                <button type="submit">Agregar</button>
            </div>
        </form>
    )
}

export default ExpenseForm;