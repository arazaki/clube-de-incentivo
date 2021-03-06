import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
    <div className="content-container content-container--bg-white">
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>
                            Sem compras ainda :/
                    </span>
                    </div>
                ) : (
                        props.expenses.sort((a, b) => {
                            return a.purchaseDate < b.purchaseDate ? 1 : -1;
                            
                        }).map((expense) => {
                            return <ExpenseListItem key={expense.cfeId} {...expense} />;
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        expenses: props.sales
    };
};

export default connect(mapStateToProps)(ExpenseList);