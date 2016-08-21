import os

from setuptools import setup, find_packages

requires = [
    "pyramid",
    "pyramid_chameleon",
    "pyramid_debugtoolbar",
    "waitress",
]

tests_require = [
    "WebTest >= 1.3.1",  # py3 compat
    "pytest",  # includes virtualenv
    "pytest-cov",
]

setup(name="dingen",
      version="0.0",
      description="dingen",
      classifiers=[
          "Programming Language :: Python",
          "Framework :: Pyramid",
          "Topic :: Internet :: WWW/HTTP",
          "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
      ],
      keywords="web pyramid pylons",
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      extras_require={
          "testing": tests_require,
      },
      install_requires=requires,
      entry_points="""\
      [paste.app_factory]
      main = dingen:main
      """,
      )
