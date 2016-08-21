from pyramid.config import Configurator
from pyramid.static import ManifestCacheBuster
from pyramid.settings import asbool


def main(global_config, **settings):
    """
    This function returns a Pyramid WSGI application.
    """
    config = Configurator(settings=settings)
    config.include("pyramid_chameleon")

    if asbool(settings.get("dingen.dev")):
        dev_static = settings.get("dingen.dev_static", "static")
        config.add_static_view(name=dev_static, path="dingen:static")
    else:
        config.add_static_view(name="static", path="dingen:static")
        config.add_cache_buster("dingen:static", ManifestCacheBuster("dingen:static/manifest.json"))

    config.add_route("home", "/")
    config.scan()
    return config.make_wsgi_app()
