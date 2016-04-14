import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {  } from '../actions';
import SettingPage from '../components/SettingPage';

const settingSelector = state => state.settings;

const mapStateToProps = createSelector(
	settingSelector,
	(settings) => ({...settings})
);

const mapActionToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapActionToProps)(SettingPage);