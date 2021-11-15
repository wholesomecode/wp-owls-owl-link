import { Button, IconButton } from '@wordpress/components';
import { MediaUploadCheck, MediaPlaceholder, RichText, URLInput, URLPopover, useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( props ) {
	const [ showURLPopover, setPopover ] = useState( false );

	const {
		attributes,
		isSelected,
		setAttributes,
	} = props;

	const {
		content,
		imageAlt,
		imageId,
		imageUrl,
		linkText,
		linkUrl,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'owl-link',
	} );

	return (
		<div {...blockProps}>
			{ isSelected && ! imageUrl ? (
			<MediaUploadCheck>
				<MediaPlaceholder
					icon={ 'format-image' }
					labels={ {
						title: __( 'Add Image', 'wp-owls' ),
						instructions: __( 'Select an image for the Owl Link block', 'wp-owls' ),
					} }
					onSelect={ image => {
						setAttributes({
							imageAlt: image.alt,
							imageId: image.id,
							imageUrl: image.url,
						});
					}}
					accept="image/*"
				/>
			</MediaUploadCheck>
			) : (
				<>
				{ imageUrl &&
					<div className="owl-link__image">
						<img src={ imageUrl } alt={ imageAlt } className={'wp-image-' + imageId} />
						{ isSelected &&
							<Button
								className="owl-link__image-remove"
								isDestructive
								label={ __( 'Remove Image', 'wp-owls' ) }
								onClick={ image => {
									setAttributes({
										imageAlt: '',
										imageId: '',
										imageUrl: '',
									});
								}}
							>
								{ __( 'Remove Image', 'wp-owls' ) }
							</Button>
						}
					</div>
				}
				</>
			)}
			<div className="owl-link__content">
				<RichText
					onChange={ content => setAttributes({content})}
					placeholder={__('Enter content', 'wp-owls')}
					tagName="p"
					value={content}
				/>
				<p className="owl-link__link">
					<RichText
						formattingControls={[]}
						onChange={linkText => setAttributes({linkText})}
						placeholder={__('Enter Link Text', 'wp-owls')}
						tagName="span"
						value={linkText}
					/>
					</p>
					{isSelected && (
						<IconButton
							className="owl-link__link-button"
							icon={'admin-links'}
							onClick={ () => setPopover( true ) }
						>
							{ isSelected && showURLPopover && (
								<URLPopover
									onClose={ () => setPopover( false ) }
								>
									<form
										className="block-editor-url-popover__link-editor"
										onSubmit={ ( event ) => {
											event.preventDefault();
											setPopover( false );
										} } >
										<div className="editor-url-input block-editor-url-input">
											<URLInput
												value={ linkUrl }
												onChange={linkUrl => setAttributes({linkUrl})}
												placeholder={ __( 'Enter Url', 'wp-owls' ) }
											/>
										</div>
										<IconButton icon="editor-break" label={ __( 'Apply', 'wp-owls' ) } type="submit" />
									</form>
								</URLPopover>
							) }
						</IconButton>
					)}
			
			</div>
		</div>
	);
}
