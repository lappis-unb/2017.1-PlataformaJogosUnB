import factory
from game.models import Game, Package, Platform


class GameFactory(factory.DjangoModelFactory):

    class Meta:
        model = Game

    name = factory.faker.Faker("word")
    cover_image = factory.django.ImageField()
    version = factory.LazyAttribute(lambda x: "1.0")
    official_repository = factory.faker.Faker("url")


class PlatformFactory(factory.DjangoModelFactory):

    class Meta:

        model = Platform

    name = factory.faker.Faker("word")
    extensions = factory.LazyAttribute(lambda x: "deb")
    icon = factory.django.ImageField(format="jpeg")


class PackageFactory(factory.DjangoModelFactory):

    class Meta:
        model = Package

    package = factory.django.FileField(data=b'1' * 10, filename='package.deb')
    game = factory.SubFactory(GameFactory)
