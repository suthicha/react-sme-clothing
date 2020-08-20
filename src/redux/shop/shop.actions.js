import ShopActionType from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = collectionsMap => ({
    type: ShopActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionType.FETCH_COLLECTIONS_SUCCUESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}


