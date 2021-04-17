import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU
}

const locale = {
  'message': '-',
  'menu.home': 'Home',

  'menu.platform': 'Platform',
  'menu.platform.dashboard': 'Dashboard',
  'menu.sys.admin': 'System',
  'menu.sys.settings': 'Global Settings',

  'menu.nlu': 'Natural Language Understanding',
  'menu.project': 'Project',
  'menu.project.list': 'Project List',
  'menu.project.edit': 'Project Edit',
  'menu.intent': 'Intent',
  'menu.intent.list': 'Intent List',
  'menu.intent.edit': 'Intent Edit',
  'menu.synonym': 'Synonym',
  'menu.synonym.list': 'Synonym List',
  'menu.synonym.edit': 'Synonym Edit',
  'menu.lookup': 'Lookup',
  'menu.lookup.list': 'Lookup List',
  'menu.lookup.edit': 'Lookup Edit',

  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': 'Analysis',
  'menu.dashboard.monitor': 'Monitor',
  'menu.dashboard.workplace': 'Workplace',

  'layouts.usermenu.dialog.title': 'Message',
  'layouts.usermenu.dialog.content': 'Do you really log-out.',

  'app.setting.pagestyle': 'Page style setting',
  'app.setting.pagestyle.light': 'Light style',
  'app.setting.pagestyle.dark': 'Dark style',
  'app.setting.pagestyle.realdark': 'RealDark style',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.navigationmode': 'Navigation Mode',
  'app.setting.content-width': 'Content Width',
  'app.setting.fixedheader': 'Fixed Header',
  'app.setting.fixedsidebar': 'Fixed Sidebar',
  'app.setting.sidemenu': 'Side Menu Layout',
  'app.setting.topmenu': 'Top Menu Layout',
  'app.setting.content-width.fixed': 'Fixed',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.othersettings': 'Other Settings',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copy Setting',
  'app.setting.loading': 'Loading theme',
  'app.setting.copyinfo': 'copy success，please replace defaultSettings in src/models/setting.js',
  'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify',

  'common.notify': 'Notification',

  'form.create': 'Create',
  'form.edit': 'Edit',
  'form.remove': 'Delete',
  'form.disable': 'Disable',
  'form.enable': 'Enable',
  'form.back': 'Back',
  'form.save': 'Save',
  'form.submit': 'Submit',
  'form.reset': 'Reset',
  'form.cancel': 'Cancel',
  'form.search': 'Search',
  'form.collapse': 'Collapse',
  'form.expand': 'Expand',

  'form.ok': 'Ok',
  'form.confirmToRemove': 'Confirm to delete?',

  'form.all': 'All',
  'form.name': 'Name',
  'form.status': 'Status',

  'status.enable': 'Enable',
  'status.disable': 'Disable',

  'msg.warn': 'Warning',
  'msg.canNotDisableDefaultProject': 'Can not disable default project.',
  'msg.canNotDeleteDefaultProject': 'Can not delete default project.',

  'common.no': '编号',
  'common.name': 'Name',
  'common.status': 'Status',
  'common.isDefault': 'Is Default',
  'common.opt': 'Operation'
}

export default {
  ...components,
  ...locale
}
