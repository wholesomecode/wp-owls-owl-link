import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {
	const {
		content,
		imageAlt,
		imageId,
		imageUrl,
		linkText,
		linkUrl,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'owl-link',
	} );
	
	return (
		<div {...blockProps}>
			{ imageUrl && 
				<img src={imageUrl} alt={imageAlt} className={'owl-link__image wp-image-' + imageId}/>
			}
			<div className="owl-link__content">
				<p><RichText.Content value={content}/></p>
				<p className="owl-link__link">
					<a rel="noreferrer noopener" href={linkUrl}>
						{linkText}
					</a>
				</p>
			</div>
		</div>
	);
}
