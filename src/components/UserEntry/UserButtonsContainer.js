import React from 'react';
import UserButtonContainer from './UserButtonContainer';

import * as SEARCHTYPES from './../../store/search_types';
import { updateSearchType } from './../../store/actions/action_creators';

const UserButtonsContainer = (props) => {
    return (
        <div>
            <UserButtonContainer action={updateSearchType} type={SEARCHTYPES.ALL} buttonText={'All'}></UserButtonContainer>
            <UserButtonContainer action={updateSearchType} type={SEARCHTYPES.SOME} buttonText={'Some'}></UserButtonContainer>
            <UserButtonContainer action={updateSearchType} type={SEARCHTYPES.EXACT} buttonText={'Exact'}></UserButtonContainer>
        </div>
    )
}

export default UserButtonsContainer;