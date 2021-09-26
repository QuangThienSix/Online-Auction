import BaseController from './baseController';
import {
    getTopbar,
    getCountTopbar,
    getTopbarId,
    getTopbarIdDownload,

    getNavigation,
    getCountNavigetNavigation,
    getNavigationId,
    getNavigationIdDownload,

    getHeader,
    getHeaderId,
    getHeaderIdDownload,
    getCountHeader,


    getCountPlugin,
    getPluginId,
    getPlugin,
    getPluginIdDownload,
    getPluginFolderDownload,
    getPluginSlugDownload,

    getWidget,
    getWidgetBycategory,
    getCountWidget,
    getWidgetIdDownload,

    getCategories,
    getCountCategories,
    getWidgetId,
}
from '../models/indexv2'
import logger from '../lib/utils/logger';
import base64 from 'base-64';
import PHPUnserialize from 'php-unserialize';

class IndexV2Controller extends BaseController {
    constructor() {
        super();
        // this.GetVoucher = this.GetVoucher.bind(this);
        this.GetTopbar = this.GetTopbar.bind(this);
        this.GetTopbarDownload = this.GetTopbarDownload.bind(this);

        this.GetHeader = this.GetHeader.bind(this);
        this.GetHeadernDownload = this.GetHeadernDownload.bind(this);

        this.GetNavigation = this.GetNavigation.bind(this);
        this.GetNavigationDownload = this.GetNavigationDownload.bind(this);

        this.GetPlugin = this.GetPlugin.bind(this);
        this.GetVersion = this.GetVersion.bind(this);
        this.GetPluginnDownload = this.GetPluginnDownload.bind(this);

        this.GetWidget = this.GetWidget.bind(this);
        this.GetWidgetID = this.GetWidgetID.bind(this);
        this.GetCategories = this.GetCategories.bind(this);
        this.GetWidgetDownload = this.GetWidgetDownload.bind(this);
    }
    async GetTopbar(req, res) {
        logger.info('Get Topbar');
        const Countdata = await getCountTopbar();
        if (req.params.id) {
            logger.info('Get Topbar id: ' + req.params.id);
            const data = await getTopbarId(req.params.id);
            if (data) {
                logger.info('Success Topbar');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Topbar ');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        } else {
            const data = await getTopbar();
            if (data) {
                logger.info('Success Topbar');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Topbar ');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        }

    }
    async GetTopbarDownload(req, res) {
        logger.info('GetTopbar Download');
        const Countdata = await getCountTopbar();
        if (req.params.id) {
            const data = await getTopbarIdDownload(req.params.id);
            if (data) {
                logger.info('Success Topbar Download');
                return this.responseSuccess(res, {
                    'file': data.file,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Topbar Download');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        } else {
            logger.info('Error Topbar Download No ID');
            return this.responseSuccess(res, {
                'status': 'error',
                'data': {
                    'status': 'error',
                }
            });
        }
    }
    // Navigation
    async GetNavigation(req, res) {
        logger.info('Get Navigation');
        const Countdata = await getCountNavigetNavigation();
        if (req.params.id) {
            logger.info('Get Navigation id: ' + req.params.id);
            const data = await getNavigationId(req.params.id);
            if (data) {
                logger.info('Success Navigation');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Navigation no Data');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        } else {
            const data = await getNavigation();
            if (data) {
                logger.info('Success Navigation');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Navigation ');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        }
    }
    async GetNavigationDownload(req, res) {
        logger.info('Get Navigation Download');
        const Countdata = await getCountTopbar();
        if (req.params.id) {
            const data = await getNavigationIdDownload(req.params.id);
            if (data) {
                logger.info('Success Navigation Download');
                return this.responseSuccess(res, {
                    'file': data.file,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Navigation Download');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        } else {
            logger.info('Error Navigation Download No ID');
            return this.responseSuccess(res, {
                'status': 'error',
                'data': {
                    'status': 'error',
                }
            });
        }
    }
    // HEADER
    async GetHeader(req, res) {
        logger.info('Get Header');
        const Countdata = await getCountHeader();
        if (req.params.id) {
            logger.info('Get Header id: ' + req.params.id);
            const data = await getHeaderId(req.params.id);
            if (data) {
                logger.info('Success Header');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Header no Data');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        } else {
            const data = await getHeader();
            if (data) {
                logger.info('Success Header');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Header ');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        }
    }
    async GetHeadernDownload(req, res) {
        logger.info('Get Header Download');
        const Countdata = await getCountHeader();
        if (req.params.id) {
            const data = await getHeaderIdDownload(req.params.id);
            if (data) {
                logger.info('Success Header Download');
                return this.responseSuccess(res, {
                    'file': data.file,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Header Download');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        } else {
            logger.info('Error Header Download No ID');
            return this.responseSuccess(res, {
                'status': 'error',
                'data': {
                    'status': 'error',
                }
            });
        }
    }
    // PLUGIN
    async GetPlugin(req, res) {
        logger.info('Get Plugin');
        const Countdata = await getCountPlugin();
        if (req.params.id) {
            logger.info('Get Plugin id: ' + req.params.id);
            const data = await getPluginId(req.params.id);
            if (data) {
                logger.info('Success Plugin');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Plugin no Data');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        } else {
            const data = await getPlugin();
            if (data) {
                logger.info('Success Plugin');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Plugin ');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        }
    }
    async GetVersion(req, res) {
        logger.info('Get Version');
        if (req.params.name) {
            let version = {}
            const name = req.params.name;
            if (req.params.name == 'watermark') {
                const item = await getPluginSlugDownload(folder);
                version[name] = item.version;
            } else {
                const item = await getPluginFolderDownload(folder);
                version[name] = item.version;
            }
            logger.info('Success Get Version Name');
            return this.responseSuccess(res, {
                'status': 'success',
                version
            });
        } else {
            if (req.body.list) {
                logger.info('Request list: ' + req.body.list);
                const bytes = base64.decode(req.body.list);
                const JsonData = JSON.parse(bytes);
                const n = JsonData.length || 0;
                let version = {}
                for (let i = 0; i < n; i++) {
                    const folder = JsonData[i];
                    if (folder == 'watermark') {
                        const items = await getPluginSlugDownload(folder);
                        version[JsonData[i]] = items.version;
                    } else {
                        const items = await getPluginFolderDownload(folder);
                        version[JsonData[i]] = items.version;
                    }
                }
                logger.info('Success Get Version');
                return this.responseSuccess(res, {
                    'status': 'success',
                    version
                });
            } else {
                logger.info('Error Get Version');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        }


    }
    async GetPluginnDownload(req, res) {
        logger.info('Get PLUGIN Download');
        const Countdata = await getCountPlugin();
        if (req.params.id) {
            const data = await getPluginIdDownload(req.params.id);
            if (data) {
                logger.info('Success PLUGIN Download');
                return this.responseSuccess(res, {
                    'file': data.file,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error PLUGIN Download');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        } else {
            logger.info('Error PLUGIN Download No ID');
            return this.responseSuccess(res, {
                'status': 'error',
                'data': {
                    'status': 'error',
                }
            });
        }
    }
    // WEDGET
    async GetWidget(req, res) {
        logger.info('Get Widget');
        const Countdata = await getCountWidget();
        if (req.query.bycategory) {
            logger.info('Get Widget bycategory: ' + req.query.bycategory);
            const data = await getWidgetBycategory(req.query.bycategory);
            if (data) {
                logger.info('Success Widget With ByCategory');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Widget no Data');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        }else {
            const data = await getWidget();
            if (data) {
                logger.info('Success Widget');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Widget ');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        }

    }
    async GetWidgetID(req, res) {
        logger.info('Get Widget');
        const Countdata = await getCountWidget();
        if (req.params.id) {
            logger.info('Get Widget id: ' + req.params.id);
            const data = await getWidgetId(req.params.id);
            if (data) {
                logger.info('Success Widget With ID');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Widget no Data');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        }else {
            const data = await getWidget();
            if (data) {
                logger.info('Success Widget');
                return this.responseSuccess(res, {
                    data,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Widget ');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        }

    }
    async GetWidgetDownload(req, res) {
        logger.info('Get Widget Download');
        const Countdata = await getCountWidget();
        if (req.params.id) {
            const data = await getWidgetIdDownload(req.params.id);
            if (data) {
                logger.info('Success Widget Download');
                return this.responseSuccess(res, {
                    'file': data.file,
                    'count': Countdata.count,
                    'status': 'success',
                });
            } else {
                logger.info('Error Widget Download');
                return this.responseSuccess(res, {
                    'status': 'error',
                    'data': {
                        'status': 'error',
                    }
                });
            }
        } else {
            logger.info('Error Widget Download No ID');
            return this.responseSuccess(res, {
                'status': 'error',
                'data': {
                    'status': 'error',
                }
            });
        }
    }
    async GetCategories(req, res) {
        logger.info('Get Categories');
        const Countdata = await getCountCategories();
        const data = await getCategories();
        if (data) {
            logger.info('Success Categories');
            return this.responseSuccess(res, {
                data,
                'count': Countdata.count,
                'status': 'success',
            });
        } else {
            logger.info('Error Categories ');
            return this.responseSuccess(res, {
                'status': 'error',
                'data': {
                    'status': 'error',
                }
            });
        }

    }
}
export default new IndexV2Controller();