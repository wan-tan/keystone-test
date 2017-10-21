var keystone = require('keystone');
    Types = keystone.Field.Types;

/**
 * Page Model
 * ==========
 */


var Page = new keystone.List('Page', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Page.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
  categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
	content: { type: Types.Html, wysiwyg: true, height: 400 },
});

// Page.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

Page.defaultColumns = 'title, state|20%, author|20%';

Page.register();
