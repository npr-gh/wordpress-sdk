import WordProofModal from './Modal';
import { dispatch } from '../../helpers/event';

const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Button } = wp.components;
const { useCallback } = wp.element;
import PropTypes from 'prop-types';

const OAuthDeniedModal = () => {
	const retry = useCallback( ( event ) => {
		event.preventDefault();
		dispatch( 'wordproof:open_authentication' );
	} );

	return (
		<WordProofModal
			title={ __( 'WordProof Authentication', 'wordproof_timestamp' ) }
		>
			<>
				<h3>Authorize denied!</h3>
				<p>Denied!</p>
				<Button variant={ 'primary' } onClick={ retry }>
					{ __( 'Retry', 'wordproof_timestamp' ) }
				</Button>
			</>
		</WordProofModal>
	);
};

OAuthDeniedModal.proptypes = {};

export default compose( [] )( OAuthDeniedModal );
