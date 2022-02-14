import WordProofModal from './Modal';
import { dispatch } from '../../helpers/event';

import PropTypes from 'prop-types';
const { Button } = wp.components;
const { useCallback } = wp.element;
const { __ } = wp.i18n;

const OauthDeniedModal = () => {
	const { close } = props;

	const retry = useCallback( ( event ) => {
		event.preventDefault();
		dispatch( 'wordproof:open_authentication' );
	} );

	return (
		<WordProofModal
			close={ close }
			title={ __( 'Authentication failed', 'wordproof_timestamp' ) }
		>
			<>
				<p>
					{ __(
						'Something failed during the authentication of your WordProof account. Please try again or contact the support team.',
						'wordproof_sdk'
					) }
				</p>
				<Button variant={ 'primary' } onClick={ retry }>
					{ __( 'Retry authentication', 'wordproof_timestamp' ) }
				</Button>
			</>
		</WordProofModal>
	);
};

OauthDeniedModal.proptypes = {
	close: PropTypes.func.isRequired,
};

export default OauthDeniedModal;
