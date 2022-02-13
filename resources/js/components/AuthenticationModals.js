const { useState } = wp.element;

import OauthDeniedModal from './modals/OauthDeniedModal';
import OauthFailedModal from './modals/OauthFailedModal';
import OauthSuccessModal from './modals/OauthSuccessModal';
import WebhookFailedModal from './modals/WebhookFailedModal';

const AuthenticationModals = () => {
    const [ modal, setModal ] = useState( null );

	window.addEventListener(
		'wordproof:oauth:success',
		() => {
			setModal( 'oauth:success' );
		},
		false
	);

	window.addEventListener(
		'wordproof:oauth:failed',
		() => {
			setModal( 'oauth:failed' );
		},
		false
	);

	window.addEventListener(
		'wordproof:oauth:denied',
		() => {
			setModal( 'oauth:denied' );
		},
		false
	);

	window.addEventListener(
		'wordproof:webhook:failed',
		() => {
			setModal( 'webhook:failed' );
		},
		false
	);

	return (
		<>
			{ modal === 'oauth:success' && <OauthSuccessModal /> }

			{ modal === 'oauth:denied' && <OauthDeniedModal /> }

			{ modal === 'oauth:failed' && <OauthFailedModal /> }

			{ modal === 'webhook:failed' && <WebhookFailedModal /> }
		</>
	);
};

export default AuthenticationModals;
