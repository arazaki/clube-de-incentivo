import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const BalanceSummary = ({ balanceAvaiable }) => {
    const formattedBalanceTotal = numeral(balanceAvaiable).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Saldo disponível: <span>{formattedBalanceTotal}</span>
                </h1>
            </div>
            <div className="nav-link">
                <div className="content-container">
                    <NavLink className="nav-link__link" to="/dashboard" activeClassName="is-active">Extrato</NavLink>
                    <NavLink className="nav-link__link" to="/futureCashback" activeClassName="is-active">Futuro</NavLink>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        balanceAvaiable: selectExpensesTotal(visibleExpenses),
    };
};

export default connect(mapStateToProps)(BalanceSummary);