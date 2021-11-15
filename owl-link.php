<?php
/**
 * Plugin Name:       Owl Link
 * Description:       Lorem ipsum dolor sit amet id elementum gravida hendrerit fringilla proin dapibus tempus ultricies phasellus.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            wholesomecode
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       owl-link
 *
 * @package           wp-owls
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function wp_owls_owl_link_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'wp_owls_owl_link_block_init' );
